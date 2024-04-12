fetch("index.json")
.then((response) => {
return response.json()
}).then((data) => {
console.log(data)
})

fetch("index.json")
    .then((response) => {
        return response.json()
    }).then((data) => {
        data.data.forEach((dogs) => {
            document.querySelector(".output").innerHTML += `
            <div>
            <table class="border border-slate-300">
                <tr>
                    <td><strong>Name</strong></td>
                    <td>${dogs.name}</td>
                </tr>
                    <tr>
                    <td><strong>Life Span</Strong></td>
                    <td>${dogs.life_span}</td>
                </tr>
                    <tr>
                    <td><strong>Origin</strong></td>
                    <td>${dogs.origin}</td>
                </tr>
                    <tr>
                    <td><strong>Temperament</strong></td>
                    <td>${dogs.temperament}</td>
                </tr>
                    <tr>
                    <td><strong>Weight</strong></td>
                    <td>${dogs.weight.imperial}</td>
                </tr>
                    <tr>
                    <td><strong>Bred For</strong></td>
                    <td>${dogs.bred_for}</td>
                </tr>
                    <tr>
                    <td><strong>Breed Group</strong></td>
                    <td>${dogs.breed_group}</td>
                </tr>
                    <tr>
                    <td><strong>Country Code</strong></td>
                    <td>${dogs.country_code}</td>
                </tr>
                    <tr>
                    <td><strong>Height</strong></td>
                    <td>${dogs.height.imperial}</td>
                </tr>
            </table>

            </div>
            `
})
})