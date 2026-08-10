document.addEventListener('DOMContentLoaded', () => {

    // 1. 手機端導覽列開關 toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // 2. 「摸摸 Echo 🐾」互動計數按鈕
    const petBtn = document.getElementById('petBtn');
    const petCount = document.getElementById('petCount');
    let count = 0;

    if (petBtn && petCount) {
        petBtn.addEventListener('click', (e) => {
            count++;
            petCount.textContent = count;

            createFloatingText(e.clientX, e.clientY, '🐾 汪！');
        });
    }

    function createFloatingText(x, y, text) {
        const el = document.createElement('div');
        el.textContent = text;
        el.style.position = 'fixed';
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.style.color = '#202020';
        el.style.backgroundColor = '#aac9f7';
        el.style.border = '2px solid #000000';
        el.style.borderRadius = '9999px';
        el.style.padding = '4px 12px';
        el.style.fontFamily = "'Sniglet', cursive, sans-serif";
        el.style.fontWeight = 'bold';
        el.style.fontSize = '1.1rem';
        el.style.pointerEvents = 'none';
        el.style.transition = 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)';
        el.style.zIndex = '9999';

        document.body.appendChild(el);

        setTimeout(() => {
            el.style.transform = 'translateY(-60px) scale(1.1)';
            el.style.opacity = '0';
        }, 20);

        setTimeout(() => {
            el.remove();
        }, 850);
    }

    // 3. 留言表單動態提交處理
    const messageForm = document.getElementById('messageForm');
    const messagesList = document.getElementById('messagesList');

    if (messageForm && messagesList) {
        messageForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nickname = document.getElementById('nickname').value.trim();
            const message = document.getElementById('message').value.trim();

            if (nickname && message) {
                const newCard = document.createElement('div');
                newCard.className = 'message-card';
                newCard.innerHTML = `
                    <div class="message-header">
                        <strong>${escapeHTML(nickname)}</strong>
                        <span class="message-time">剛剛</span>
                    </div>
                    <p>${escapeHTML(message)}</p>
                `;

                messagesList.prepend(newCard);
                messageForm.reset();
            }
        });
    }

    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
        );
    }
});