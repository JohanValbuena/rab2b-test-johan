export async function fetchDataModuleOne(){
    try {
        const data = await import('@/app/utils/mocks/page-one.json');
        return data;

    } catch (error) {
        console.log('error:', error)
        
    }
}

export async function fetchDataModuleTwo(){
    try {
        const data = await import('@/app/utils/mocks/page-two.json');
        return data;

    } catch (error) {
        console.log('error:', error)
        
    }
}