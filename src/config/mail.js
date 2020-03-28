export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  sercure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com>',
  },
};
