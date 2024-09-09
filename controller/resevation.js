const { ErrorHandler } = require('../error/error'); // Correct import
const Reservation = require('../model/reservationSchema');

const sendreservation = async (req, res, next) => {
    const { firstname, lastname, email, phone, time, date } = req.body;

    // Check if all fields are provided
    if (!firstname || !lastname || !email || !phone || !time || !date) {
        return next(new ErrorHandler('Please enter all the fields', 400)); // Correct usage of ErrorHandler
    }

    try {
        // Create the reservation
        await Reservation.create({ firstname, lastname, email, phone, time, date });

        res.status(201).json({
            success: true,
            message: 'Reservation created successfully',
        });
    } catch (err) {
        if (err.name === 'ValidationError') {
            const validationErrors = Object.values(err.errors).map((error) => error.message);
            return next(new ErrorHandler(validationErrors.join(', '), 400)); // Correct ErrorHandler usage
        }

        return next(err); // For other errors
    }
};

module.exports = sendreservation;
