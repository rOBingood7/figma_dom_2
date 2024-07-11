export function reload(data, component, place) {
    place.innerHTML = ""

    for(let item of data) {
        const idx = data.indexOf(item)
        const comp = component(item, idx, data)

        place.append(comp)
    }
    
}