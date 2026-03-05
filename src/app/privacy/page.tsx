import Breadcrumb from "@/components/Common/Breadcrumb";
import Privacy from "@/components/Privacy";

export const metadata = {
    title: 'Privacy Policy | Tech Yugantar',
    description:
        'Learn how Tech Yugantar (by Tech Yugantar) collects, uses, and protects your personal data, including advertising IDs and reward transaction logs.',
    robots: { index: true, follow: true },
    openGraph: {
        title: 'Privacy Policy | Tech Yugantar',
        description: 'How Tech Yugantar handles your data on Tech Yugantar.',
        url: 'https://techyugantar.in/privacy',
        siteName: 'Tech Yugantar',
    },
};

const PrivacyPage = () => {
    return (
        <Privacy />
    );
};

export default PrivacyPage;