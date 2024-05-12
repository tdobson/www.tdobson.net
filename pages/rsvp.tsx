import { ContactUs } from '../components/ContactUs/ContactUs';
import { Layout } from '../components/Layout/Layout';

export default function RsvpPage() {
    const handleSubmit = (data) => {
        // Handle form submission, e.g., send data to a server or store it in a database
        console.log(data);
    };

    return (
        <Layout>
            <ContactUs onSubmit={handleSubmit} />
        </Layout>
    );
}
