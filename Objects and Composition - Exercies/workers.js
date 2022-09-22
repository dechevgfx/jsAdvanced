function constructWorker(object) {
    if (object.dizziness === true) {
        let neededWater = 0.1 * object.weight * object.experience;
        object.levelOfHydrated = Number(object.levelOfHydrated) + Number(neededWater);
        object.dizziness = false;
        return(object);
    } 
        return(object);
}
constructWorker({
    weight: 80,

    experience: 1,

    levelOfHydrated: 0,

    dizziness: true,
});
