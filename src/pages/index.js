const Index = () => {
}

export async function getServerSideProps() {
    return {
        redirect: {
            destination: "/abudhabi",
            permanent: false
        }
    }
}

export default Index