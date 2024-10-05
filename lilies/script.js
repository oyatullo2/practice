const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const dashboardMain = document.querySelector('.dashboard-main'); 
const dashboardCheckbox = document.querySelector('#dashboard');

document.addEventListener('DOMContentLoaded', function() {
    loadContent('../lilies-dashboard/index.html');
    
    dashboardCheckbox.checked = true;
    dashboardCheckbox.nextElementSibling.style.backgroundColor = '#EFEFEF';
    dashboardCheckbox.nextElementSibling.style.color = 'black';
});

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            checkboxes.forEach(c => {
                if (c !== this) {
                    c.checked = false; 
                    c.nextElementSibling.style.backgroundColor = 'transparent';
                    c.nextElementSibling.style.color = '#707070';
                }
            });
            
            this.nextElementSibling.style.backgroundColor = '#EFEFEF';
            this.nextElementSibling.style.color = 'black';

            let filePath;
            switch (this.id) {
                case 'dashboard':
                    filePath = '../lilies-dashboard/index.html';
                    loadContent(filePath);
                    break;
                case 'profile':
                    filePath = '../profil/index.html';
                    loadContent(filePath);
                    break;
                case 'orders':
                    filePath = '../orders/index.html'; 
                    loadContent(filePath);
                    break;
                case 'cart':
                    filePath = '../cart/index.html'; 
                    loadContent(filePath);
                    break;
                default:
                    filePath = '/lilies/index.html'; 
                    loadContent(filePath);
            }
        }
    });
});

function loadContent(filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Faylni yuklab bo\'lmadi: ' + filePath);
            }
            return response.text(); 
        })
        .then(html => {
            dashboardMain.innerHTML = html; 
        })
        .catch(error => {
            dashboardMain.innerHTML = `<p>Faylni yuklashda xato: ${error.message}</p>`;
        });
}
