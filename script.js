document.addEventListener('DOMContentLoaded', () => {

    // 1. 手機端導覽列開關 toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // 點擊選單連結後自動關閉選單
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

            // 觸發可愛的動態浮動字樣
            createFloatingText(e.clientX, e.clientY, '🐾 汪！');
        });
    }

    function createFloatingText(x, y, text) {
        const el = document.createElement('div');
        el.textContent = text;
        el.style.position = 'fixed';
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.style.color = '#FB8500';
        el.style.fontWeight = 'bold';
        el.style.fontSize = '1.2rem';
        el.style.pointerEvents = 'none';
        el.style.transition = 'all 1s ease-out';
        el.style.zIndex = '9999';

        document.body.appendChild(el);

        setTimeout(() => {
            el.style.transform = 'translateY(-50px)';
            el.style.opacity = '0';
        }, 20);

        setTimeout(() => {
            el.remove();
        }, 1000);
    }

    // 3. 留言表單動態提交處理
    const messageForm = document.getElementById('messageForm');
    const messagesList = document.getElementById('messagesList');

    if (messageForm && messagesList) {
        messageForm.addEventListener('submit', (e) => {
            e.preventDefault(); // 防止頁面重整

            const nickname = document.getElementById('nickname').value.trim();
            const message = document.getElementById('message').value.trim();

            if (nickname && message) {
                // 建立新的留言卡片
                const newCard = document.createElement('div');
                newCard.className = 'message-card';
                newCard.innerHTML = `
                    <div class="message-header">
                        <strong>${escapeHTML(nickname)}</strong>
                        <span class="message-time">剛剛</span>
                    </div>
                    <p>${escapeHTML(message)}</p>
                `;

                // 插入到最前面
                messagesList.prepend(newCard);

                // 清空輸入框
                messageForm.reset();
            }
        });
    }

    // 簡單的 HTML 轉義以防 XSS
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