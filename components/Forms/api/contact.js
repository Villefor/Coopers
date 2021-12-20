

const info = require('../../../configlocal')

export default function (req, res) {
    console.log(req.body)
    let nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
        port: 587,
        host: "smtp.umbler.com",
        auth: {
          user: info.USERMAIL,
          pass: info.PASSWORD,
        },
        // secure: true,
    })

    transporter.sendMail ({
      from: `Mr Wilson testing program <${info.USERMAIL}>`,
      to: 'dariovillefor@gmail.com',
      replyTo: req.body.email,
      subject: `Message From ${req.body.name}`,
      text: req.body.message,
      html: <div>{req.body.message}</div>
    }).then((response) => { res.send(response) })
      .catch((error) => { res.send(error) })

    // const mailData = {
    //     from: 'coopersapplication@gmail.com',
    //     to: 'dariovillefor@gmail.com',
    //     subject: `Message From ${req.body.name}`,
    //     text: req.body.message,
    //     html: <div>{req.body.message}</div>
    // }

    // transporter.sendMail(mailData, function (err, info) {
    //     if(err)
    //       console.log(err)
    //     else
    //       console.log(info)
    //       res.status(200)
    // })

}