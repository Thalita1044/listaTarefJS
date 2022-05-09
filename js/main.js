const Main = { // Main letra maiscula é por ser o objeto principal

    init: function () {// responsavel por iniciar 
        this.cacheSelector()
        this.bindEvents()
    },
    cacheSelector: function () { //add elementos do html e armazenar numa variavel
        this.$checkButtons = document.querySelectorAll('.check')
        this.$inputTask = document.querySelector('#inputTask')
        this.$list = document.querySelector('#list')
        this.$removeButtons = document.querySelectorAll('.remove')
    },

    bindEvents: function () { //resposavel add eventos (de click,+ e teclas)
        const self = this
        this.$checkButtons.forEach(function (button) {
            button.onclick = self.Events.checkButton_click
        })
        this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this)

        this.$removeButtons.forEach(function(button){
            button.onclick = self.Events.removeButton_click

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
        },

        inputTask_keypress: function (e) {
            const key = e.key
            const value = e.target.value

            if (key === 'Enter') {
                this.$list.innerHTML += `

                    <li>
                        <div class="check"></div>
                        <label class="task">
                            ${value}
                        </label>
                        <button class="remove"></button>
                    </li>
                `
                e.target.value = ''
                
                this.cacheSelector()
                this.bindEvents()
            }
        },

       removeButton_click: function(e){
           let li = e.target.parentElement

           li.classList.add('removed')

           setTimeout(function(){
                li.classList.add('hidden')
           },300)

       }
    }
}
Main.init()