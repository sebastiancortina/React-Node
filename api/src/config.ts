import dotenv from 'dotenv'
dotenv.config();

export default  {
    MOGO_DATABASE:process.env.MOGO_DATABASE || 'videosdb',
    MOGO_USER: process.env.MOGO_USER ||'admin',
    MOGO_PASSWORD: process.env.MOGO_PASSWORD ||'admin',
    MOGO_HOST: process.env. MOGO_HOST ||'localhost',
    PORT: process.env.PORT || 4000
}