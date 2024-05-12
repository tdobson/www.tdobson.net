import { FaqWithBg } from '../components/FaqWithBg/FaqWithBg';
import { Layout } from '../components/Layout/Layout';

const detailsData = [
    {
        question: 'What should I wear?',
        answer: "Ideally clothes. We want you to be comfortable - so whether you feel most comfortable in vans, doc martens, stilettos, hiking boots or wellies - we want you to feel welcome. Some people will probably dress formalish as if it was a christening, but it's not so other people may wear casualish clothes like they were going to a child's birthday.",
    },
    {
        question: 'Should I bring James a birthday present?',
        answer: "If you'd like to. There's certainly no pressure to, and at this age, it's almost certain that he'll find something. He explores everything with his mouth at the moment, but we'd prefer if you didn't give him sweets.",
    },
    {
        question: "What's the format?",
            answer: "Expect speeches, toasts, food, chat, and possibly readings/songs/poems/raps. The precise order is TBC. There will be an opportunity (if you would like) to give a short speech, give a reading, perform a song, etc. If this is something that you'd be keen to do, please drop us a message in advance.",
},
{
    question: 'Will there be food?',
        answer: "Yes. Gluten-free and vegetarian options will be available. If you have dietary requirements beyond those, please let us know, and we'll do our best to accommodate.",
},
];

export default function DetailsPage() {
    return (
        <Layout>
            <FaqWithBg data={detailsData} />
        </Layout>
    );
}
