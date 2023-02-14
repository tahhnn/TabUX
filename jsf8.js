const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const tabs = $$('.tab-item');
const panels = $$('.tab-pane');

tabs.forEach((tab, index) => {
    const panel = panels[index];
    
    tab.onclick = function(){
        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');

        this.classList.add('active');
        panel.classList.add('active');
        
        
    }

})