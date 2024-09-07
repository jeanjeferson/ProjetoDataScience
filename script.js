document.addEventListener('DOMContentLoaded', function() {
    // FAQ functionality
    const faqData = [
        {
            question: "Como o AgendAi funciona com o WhatsApp?",
            answer: "O AgendAi se integra diretamente ao seu WhatsApp Business, enviando confirmações, lembretes e permitindo que os clientes façam agendamentos diretamente pelo chat."
        },
        {
            question: "Preciso ter conhecimento em tecnologia para usar o AgendAi?",
            answer: "Não! Desenvolvemos o AgendAi pensando na facilidade de uso. Nossa interface é intuitiva e oferecemos suporte para ajudar você em cada passo."
        },
        {
            question: "Posso experimentar antes de assinar?",
            answer: "Sim! Oferecemos um período de teste gratuito de 14 dias para que você possa experimentar todas as funcionalidades do plano Pro."
        },
        {
            question: "Como a IA melhora meus agendamentos?",
            answer: "Nossa IA analisa padrões de agendamento, preferências de clientes e horários de pico para sugerir os melhores slots de agendamento, maximizando sua agenda e satisfação do cliente."
        },
        {
            question: "O AgendAi substitui meu sistema atual de agendamentos?",
            answer: "O AgendAi pode substituir completamente seu sistema atual ou integrar-se a ele, dependendo da sua preferência. Nossa equipe pode ajudar na transição ou integração."
        }
    ];

    const faqList = document.querySelector('.faq-list');

    faqData.forEach((item, index) => {
        const faqItem = document.createElement('div');
        faqItem.classList.add('faq-item');
        faqItem.innerHTML = `
            <div class="faq-question">
                ${item.question}
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
                ${item.answer}
            </div>
        `;
        faqList.appendChild(faqItem);

        const question = faqItem.querySelector('.faq-question');
        const answer = faqItem.querySelector('.faq-answer');
        const icon = question.querySelector('i');

        question.addEventListener('click', () => {
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });
    });

    // Chatbot functionality
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');

    chatbotToggle.addEventListener('click', () => {
        chatbotWindow.classList.toggle('hidden');
    });

    chatbotClose.addEventListener('click', () => {
        chatbotWindow.classList.add('hidden');
    });

    // Simple chatbot response (can be expanded)
    const chatbotInput = document.querySelector('.chatbot-input input');
    const chatbotMessages = document.querySelector('.chatbot-messages');

    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && chatbotInput.value.trim() !== '') {
            const userMessage = chatbotInput.value.trim();
            addMessage('user', userMessage);
            chatbotInput.value = '';

            // Simple bot response
            setTimeout(() => {
                addMessage('bot', "Obrigado por sua mensagem! Um de nossos atendentes entrará em contato em breve.");
            }, 500);
        }
    });

    function addMessage(sender, message) {
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Smooth scrolling for navigation (if you have navigation links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});