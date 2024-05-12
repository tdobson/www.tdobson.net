import { FaqWithBg } from '../components/FaqWithBg/FaqWithBg';
import { Layout } from '../components/Layout/Layout';

const faqData = [
    {
        question: 'Will there be food?',
        answer: "Yes. Gluten-free and vegetarian options will be available. If you have dietary requirements beyond those, please let us know, and we'll do our best to accommodate.",
    },
    {
        question: 'Will there be drinks?',
        answer: 'Yes, there will be sparkling wine, soft drinks, and non-alcoholic options available.',
    },
    {
        question: "Is there parking available?",
        answer: "Yes. There are 30 parking spaces in a fairly cramped car park at the venue. If you prefer easy parking and a 3-minute walk, there's plenty of on-road parking on Station Road.",
    },
    {
        question: 'Have you ordered nice weather?',
        answer: 'Yes. Order number #12345-1337. 23°C, Sunny, Dry. Confirmed.',
    },
];

export default function FaqPage() {
    return (
        <Layout>
            <FaqWithBg data={faqData} />
        </Layout>
    );
}
