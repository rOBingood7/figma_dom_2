export function todoItem(item, idx, arr) {
    const tr = document.createElement('tr')
    const number = document.createElement('td')
    const name = document.createElement('td')
    const year = document.createElement('td')
    const actions = document.createElement('td')
    const edit = document.createElement('button')
    const del = document.createElement('button')

    
    number.innerHTML = idx + 1
    name.innerHTML = item.name
    year.innerHTML = item.age
    actions.classList.add("actions")
    edit.classList.add("edit")
    del.classList.add("delete")

    tr.append(number, name, year, actions)
    actions.append(edit, del)

    del.onclick = () => {
        arr.splice(idx, 1)
        tr.remove()  
    }

    const close = document.querySelector('.close')
    const dialog = document.querySelector('dialog')
    const modal_form = document.forms.namedItem("changeItem");
    
    
    edit.onclick = () => {
        dialog.showModal()

        const modal_name = document.querySelector("#modal_name");
        const modal_age = document.querySelector("#modal_age");
        let this_year = new Date().getFullYear()
        modal_name.value = item.name
        modal_age.value = this_year - item.age

        openAndSave(item)
  
        function openAndSave(item) {
            modal_form.onsubmit = (e) => {
                e.preventDefault();
                
               let newName = new FormData(e.target).get('modal_name')
               let newAge = new FormData(e.target).get('modal_age')
               
               
               if(newAge>=0) {
                let user_year = this_year - newAge
           
                if(user_year >= 0 && user_year<=this_year) {
                       
                item.name = newName
                item.age = newAge

                name.innerHTML = newName
                year.innerHTML = this_year - newAge
               
                
                e.target.reset();
                dialog.close();
            } else {
                alert('error')
            }
        } else {
            alert('error')
        }
        
    };
}
}

    close.onclick = () => {
        dialog.close()
    }

    return tr
}