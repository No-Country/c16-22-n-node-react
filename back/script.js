const professional = {
    name: String,
    lastName: String,
    company: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    category: String,
    validations: String,
    description: String,
    pricePerHour: String,
    timeAvailability: String,
    geographicAvailability: String,
    bookings: [{
        date: Date,
        place: String,
    }],
    gallery: [{
        imageId: String,
        imageUrl: String,
    }],
    comments: [{
        user: String,
        body: String,
        date: Date
    }],
    contact: {
        type: String,
        unique: true,
    },
    payment: String,
    hidden: Boolean
}

const jsonStrProfessional = JSON.stringify(professional);


document.getElementById("json").innerHTML = jsonStrProfessional;