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
            <table>
                <tr>
                    <td>Name</td>
                    <td>${dogs.name}</td>
                </tr>
                    <tr>
                    <td>Life Span</td>
                    <td>${dogs.life_span}</td>
                </tr>
                    <tr>
                    <td>Origin</td>
                    <td>${dogs.origin}</td>
                </tr>
                    <tr>
                    <td>Temperament</td>
                    <td>${dogs.temperament}</td>
                </tr>
                    <tr>
                    <td>Weight (kg)</td>
                    <td>${dogs.weight.imperial}</td>
                </tr>
                    <tr>
                    <td>Bred For</td>
                    <td>${dogs.bred_for}</td>
                </tr>
                    <tr>
                    <td>Breed Group</td>
                    <td>${dogs.breed_group}</td>
                </tr>
                    <tr>
                    <td>Country Code</td>
                    <td>${dogs.country_code}</td>
                </tr>
                    <tr>
                    <td>Height (kg)</td>
                    <td>${dogs.height.imperial}</td>
                </tr>
            </table>

            </div>
            `
})
})

// fetch("index.json")
// .then((response) => {
// return response.json()
// }).then((dogdata) => {
// document.querySelector(".output").innerHTML = `
//     <table>
//         <tr>
//             <td>Name</td>
//             <td>${data[0].name}</td>
//         </tr>
//             <tr>
//             <td>content</td>
//             <td>content</td>
//         </tr>
//             <tr>
//             <td>content</td>
//             <td>content</td>
//         </tr>
//             <tr>
//             <td>content</td>
//             <td>content</td>
//         </tr>
//             <tr>
//             <td>content</td>
//             <td>content</td>
//         </tr>
//             <tr>
//             <td>content</td>
//             <td>content</td>
//         </tr>
//             <tr>
//             <td>content</td>
//             <td>content</td>
//         </tr>
//             <tr>
//             <td>content</td>
//             <td>content</td>
//         </tr>
//             <tr>
//             <td>content</td>
//             <td>content</td>
//         </tr>
//     </table>
//     `
// })