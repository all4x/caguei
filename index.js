const { Client, LocalAuth } = require('whatsapp-web.js');
const { PrismaClient } = require('@prisma/client');
const qrcode = require('qrcode-terminal');

const prisma = new PrismaClient();

const client = new Client({
    authStrategy: new LocalAuth({ clientId: "client-one" }),
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Contador de bosta online!');
});

client.on('message', async (message) => {
    if (message.author == '556392084934@c.us' && message.body === 'reset') {
        await prisma.merdas.deleteMany();
    }

    if (message.body.toLowerCase().includes('caguei')) {
        const existingEntry = await prisma.merdas.findFirst({
            where: { memberId: message.author }
        });

        let poopEmojis = '';

        if (existingEntry) {
            await prisma.merdas.update({
                where: { id: existingEntry.id },
                data: { count: existingEntry.count + 1 }
            });

            poopEmojis = '💩'.repeat(existingEntry.count + 1);
        } else {
            const contato = await message.getContact();
            const userName = contato.shortName || contato.pushname || 'Usuário Desconhecido';

            await prisma.merdas.create({
                data: { userName, memberId: message.author, count: 1 }
            });

            poopEmojis = '💩';
        }

        const contato = await message.getContact();
        const userName = contato.shortName || contato.pushname || 'Usuário Desconhecido';

        client.sendMessage(message.from, `💩 Membro ${userName} cagou! 🔥🎉 Contagem atual: ${existingEntry ? existingEntry.count + 1 : 1} ${poopEmojis}`);
    } else if (message.body.toLowerCase().includes('pódio')) {
        const podium = await prisma.merdas.findMany({
            orderBy: { count: 'desc' },
            take: 5,
        });

        let podiumMessage = '🏆 Pódio dos Cagadores 🏆\n\n';

        podium.forEach((entry, index) => {
            const contato = `Membro ${index + 1}: ${entry.userName || 'Usuário Desconhecido'}`;
            const count = `Contagem: ${entry.count} 💩`;
            podiumMessage += `${contato}\n${count}\n\n`;
        });

        client.sendMessage(message.from, podiumMessage);
    }
});

client.initialize();

