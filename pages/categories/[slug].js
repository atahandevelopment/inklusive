import Typography from '@mui/material/Typography';

export async function getServerSideProps(context) {


    return {
        props: {

        }
    }

}


export default function CategoryPage() {
   
   
    return (
        <div>
            <Typography variant="h4">
                Category Page
            </Typography>
        </div>
    )
}