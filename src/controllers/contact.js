const db = require('../db');

exports.addContact = async (req, res) => {
    const { contact_name, contact_email, contact_phone, currentUserEmail } = req.body;
    try {
        var { rows } = await db.query('SELECT * from users WHERE user_email = $1', [currentUserEmail]);
        if (rows.length) {
            await db.query('insert into contact(contact_name,contact_email,contact_phone,user_id) values ($1 , $2 , $3, $4)', [contact_name, contact_email, contact_phone, rows[0].user_id]);
            return res.status(201).json({
                success: true,
                message: 'Contact add'
            });
        };
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message
        });
    };
};

exports.editContact = async (req, res) => {
    const { contact_name, contact_email, contact_phone, contact_id } = req.body;
    console.log(req.body)
    try {
        await db.query('UPDATE contact SET contact_name = ' + contact_name + ',contact_phone = ' + contact_phone + ' WHERE contact_id = ' + contact_id + '');
        // await db.query('UPDATE contact SET contact_email = ' + contact_email + ' WHERE contact_id = ' + contact_id + '');
        // await db.query('UPDATE contact SET contact_phone = ' + contact_phone + ' WHERE contact_id = ' + contact_id + '');
        return res.status(201).json({
            success: true,
            message: 'Contact updated'
        });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message
        });
    };
};

exports.removeContact = async (req, res) => {
    const { contact_id } = req.body;
    try {
        await db.query(`delete from contact where contact_id = ${contact_id}`);

        return res.status(201).json({
            success: true,
            message: 'Contact removed'
        });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message
        });
    };
};

exports.getContacts = async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * from users WHERE user_email = $1', [req.body.user_email]);
        if (rows.length) {
            const response = await db.query('SELECT * from contact WHERE user_id = $1', [rows[0].user_id]);
            if(response.rows.length){
                return res.status(201).json({
                    success: true,
                    message: 'All contact list',
                    list : response.rows
                });
            }else {
                return res.status(201).json({
                    success: true,
                    message: 'No contact available',
                    list : []
                });
            };
        };
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message
        });
    };
};