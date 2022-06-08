const todoList = {
    items: [
        {
            text: 'Завершить текущий челлендж',
            completed: false,
        },
        {
            text: 'Отдохнуть во время перерыва',
            completed: false,
        },
        {
            text: 'Помочь напарнику понять код',
            completed: false,
        },
        {
            text: 'Выиграть в мафию',
            completed: true,
        },
    ],

    printAll: function () {
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.print(i))
        }
    },

    add: function (text) {
        this.items.unshift({
            text: text,
            completed: false
        })
    },

    remove: function (index) {
        this.items.splice(1, index)
    },

    print: function (index) {
        if (this.items[index].completed === true) {
            return `[x]${this.items[index].text}`
        }
        else return `[ ]${this.items[index].text}`

    },

    complete: function (index) {
        this.items[index].completed = true;
    },
};
// todoList.add('перейти к следующему релизу')

todoList.complete(1)

// console.log(todoList.print(0))
console.log(todoList.printAll());