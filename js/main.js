const Main = { // Main letra maiscula é por ser o objeto principal

    init: function () {// responsavel por iniciar 
        this.cacheSelector()
        this.bindEvents()
    },
    cacheSelector: function () { //add elementos do html e armazenar numa variavel
        this.$checkButtons = document.querySelectorAll('.check')
    },

    bindEvents: function () { //resposavel add eventos (de click,+ e teclas)
        const self = this
        this.$checkButtons.forEach(function (button) {
            button.onclick = self.Events.checkButton_click
        })
    },


    Events: {
        checkButton_click: function (e) {
            const li = e.target.parentElement
            const isDone = li.classList.contains('done')

            if (!isDone) {
                return li.classList.add('done')
            }
            li.classList.remove('done')
        }

    }
}
Main.init()