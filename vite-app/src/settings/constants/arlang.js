import { IconButton } from "@mui/material";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FiYoutube } from "react-icons/fi";

export const lang = {
    LOGO: 'منصة الهيرر عليمي',
    LOGO_AR: 'منصه الهيرر عليمي',
    TEACHER: 'الهيرر عليمي',
    Website: 'https://herrelemy.com',
    LOGO_Home_Description: 'منصه الهيرر عليمي للتفوق فى اللغه الالمانيه',//for Home Page
    Contact_Whatsapp: '2001555885737',
    Course_Description: 'افضل كورسات الهيرر عليمي للتفوق فى اللغه الالمانيه',

    SignUp: {
        title: 'انشاء حساب - انشاء حساب فى منصه الهيرر عليمي',
        description: "انشئ حسابك الان, وابدا رحلتك فى منصه الهيرر محمود عليمي"
    },
    Privacy: {
        title: 'السياسات الخاصه بمنصه الهيرر عليمي',
        description: "التفاصيل الخاصه بمنصه الهيرر عليمي"
    },
    Login: {
        title: 'تسجيل الدخول - تسجيل الدخول لمنصه الهيرر عليمي',
        description: "سجل دخولك الان, وابدا رحلتك فى منصه الهيرر عليمي"
    },
    LogoUri: '/assets/logo.webp',
    Socials: [
        {
            to: 'https://www.facebook.com/share/1RA6dgT8K9', image: '/assets/facebook.svg', title: 'صفحه الفيس',
            icon: <IconButton sx={{ color: 'neutral.0' }} component={Link} to={'https://www.facebook.com/share/1RA6dgT8K9'}>
                <FaFacebook style={{
                    color: 'inherit',
                }} />
            </IconButton>
        },
        {
            to: 'https://www.facebook.com/share/g/1DFoa75gUE', image: '/assets/worldwide-world.svg', title: 'جروب الطلاب'
        },
        {
            to: 'https://youtube.com/@herrelemy?si=Zg5_-v5iCG2B7NDA', image: '/assets/youtube.svg', title: 'Youtube',
            icon: <IconButton sx={{ color: 'neutral.0' }} component={Link} to={'https://youtube.com/@herrelemy?si=Zg5_-v5iCG2B7NDA'}>
                <FiYoutube style={{
                    color: 'inherit',
                }} />
            </IconButton >
        },
        {
            to: 'https://www.tiktok.com/@herrelemy?_r=1&_t=ZS-91rmiK8gnln', image: '/assets/tiktok.svg', title: 'Tiktok', icon: <IconButton sx={{ color: 'neutral.0' }} component={Link} to={'https://www.tiktok.com/@herrelemy?_r=1&_t=ZS-91rmiK8gnln'}>
                <FaTiktok style={{
                    color: 'inherit',
                }} />
            </IconButton >
        },
        {
            to: null, icon: <IconButton sx={{ color: 'neutral.0' }} component={Link} to={"https://api.whatsapp.com/send?phone=" + '2001555885737'}> 
            {/* used in footer native */}
                <FaWhatsapp style={{
                    color: 'inherit',
                }} />
            </IconButton>
        },
    ],

    WhatsAppContact: "https://api.whatsapp.com/send?phone=2001001902943&text=" + 'from Herr/Elemy Platform',

    LOGOUT: 'تسجيل الخروج',
    GRADES: "السنوات الدراسيه",
    COURSES: 'الكورسات',
    LOGIN_ENTRY: 'تسجيل دخول',
    LOGIN: 'تسجيل',
    ENTRY: "الدخول",

    //user 
    CREATE_USER: "إنشاء مستخدم",
    WALLET: 'المحفظه',
    NAME: 'الاسم ثلاثى',
    EMAIL: 'البريد الالكترونى',
    PHONE: 'رقم الهاتف',
    FAMILY_PHONE: 'هاتف ولى الامر',
    GRADE: 'السنه الدراسيه',
    CODE_optional: 'كود التفعيل (اختيارى)',
    GOVERNMENT: 'المحافظه',
    PASSWORD: 'كلمة السر',
    CONFIRM_PASSWORD: 'اعد كتابه كلمة السر',
    YOUR_SUBSCRIPTIONS: 'اشتراكاتك',
    // login
    USERNAME: "اسم المستخدم",
    CODE: 'كود',

    //getUsers
    USERS_PAGE: 'صفحة المستخدمين',
    IS_ACTIVE: "الحاله",
    ACTIVE: 'فعال',
    NOT_ACTIVE: "غير فعال",
    GROUP: 'المجموعه',
    IMAGE: "صوره",
    ROLE: "الدور",
    ALL: 'الكل',

    //content
    GRADE_CONTENT: 'محتوى الصف',
    LECTURES: 'المحاضرات',
    UNITS: 'الوحدات',
    COURSES_NUMBER: 'عدد الكورسات',
    isActive: 'الحاله',
    CREATE_UNIT: "إنشاء وحده",
    CHOOSE_UNIT: "إختر وحده",
    CREATE_COURSE: "إنشاء كورس",
    CHOOSE_COURSE: "إختر كورس",

    NO_COURSES_IN_THIS_UNIT: "لا يوجد كورسات لهذه الوحده",
    COURSE_DETAILS: 'تفاصيل الكورس',
    COURSE_DESCRIPTION: 'وصف الكورس',

    STATISTICS: 'الإحصائيات',
    SUBSCRIBERS_NUMS: 'عدد المشتركون',
    PRICE: "السعر الفعلى",
    COURSE_NAME: 'اسم الكورس',
    POUND: "جنيها",

    DATA_LOADING: "يتم تحميل البيانات ...!",

    //lecture
    LECTURE: 'محاضره',
    LECTURE_NAME: 'اسم المحاضره',
    LECTURE_DESCRIPTION: 'وصف المحاضره',
    ADD_LECTURE: 'إضافة محاضره',
    NO_LECTURES_IN_THIS_COURSE: 'لا توجد محاضرات في هذا الكورس',
    VIDEO: 'فيديو',
    THUMBNAIL: 'صوره',
    FILES: 'ملفات',
    EXAMS: "الاختبارات",
    PRE_DISCOUNT: 'السعر قبل الخصم',

    TIME: 'الوقت',
    QUESTIONS: 'الاسئله',
    ATTEMPT: 'محاوله',
    ATTEMPTS: 'المحاولات',
    YOUR_ATTEMPTS: 'عدد مرات اداء الاختبار',
    START: "ابدا",
    //errors
    REQUERIED: 'مطلوب',
    ARE_YOU_SURE: "هل انت متاكد ؟",
    AGREE: 'موافق',
    DISAGREE: 'غير موافق'
}