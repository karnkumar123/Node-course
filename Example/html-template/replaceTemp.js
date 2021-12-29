module.exports = (element, tempStudentCard) => {
    let data = tempStudentCard.replace(/{%name%}/g, element.name);
    data = data.replace(/{%age%}/g, element.age);
    data = data.replace(/{%id%}/g, element.id);
    return data;
}