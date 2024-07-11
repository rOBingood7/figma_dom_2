import { items } from "./lib/db.js"
import { reload } from "./lib/utills.js"
import { todoItem } from "./components/todoItem.js"



const tbody = document.querySelector('table tbody')
const form = document.querySelector('.form')

form.onsubmit = (e) => {
    e.preventDefault()

    let year_birth = new FormData(e.target).get('age')
    let name =  new FormData(e.target).get('name')
    let this_year = new Date().getFullYear()
    
    if(year_birth>=0) {
        let user_year =  this_year - year_birth

        if(user_year >= 0 && user_year<=this_year) {
            const todo = {
                name: name,
                age: user_year
            }
            items.push(todo)
            reload(items, todoItem, tbody);
        } else {
            alert('error')
        }
    } else {
        alert('error')
    }
}



reload(items, todoItem, tbody);



