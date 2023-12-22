const ages = [15, 45, 50];
const nuevaEdad = 30;
ages.push(nuevaEdad);

for (let i = 0; i < ages.length; i++) {
    if (ages[i] > 25) {
        alert(ages[i]);
    }
}
