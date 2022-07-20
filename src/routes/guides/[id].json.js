export async function GET({ params }) {
    // connect to database and get data

    const guides = [
        { id: 1, title: 'some title 1', body: 'lorem ipsum 1' },
        { id: 2, title: 'some title 2', body: 'lorem ipsum 2' },
        { id: 3, title: 'some title 3', body: 'lorem ipsum 3' },
        { id: 4, title: 'some title 4', body: 'lorem ipsum 4' },
        { id: 5, title: 'some title 5', body: 'lorem ipsum 5' }
    ];

    const guide = guides.find(g => g.id.toString() === params.id);

    console.log(guide);

    if(guide) {
        return {
            status: 200,
            body  : { guide }
        }
    }

    return {
        status: 404
    }
}