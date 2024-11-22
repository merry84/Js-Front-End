function info(input) {

    input.forEach(element => {

        const [town, latitude, longitude] = element.split(' | ');

        const latitudeFormat = parseFloat(latitude).toFixed(2);
        const longitudeFormat = parseFloat(longitude).toFixed(2);


        const townsInfo = {
            town: town.trim(),
            latitude: latitudeFormat,
            longitude: longitudeFormat

        };

        console.log(townsInfo);

    });
}
info(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);