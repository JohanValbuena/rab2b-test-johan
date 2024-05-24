import { unstable_noStore as noStore } from 'next/cache';


export async function fetchDataModuleOne(){
    try {
        const data = await import('@/app/utils/mocks/page-one.json');
        return data;

    } catch (error) {
        console.log('error:', error)
        
    }
}

export async function fetchDataModuleTwo(){
    // no cache
    noStore();
    try {
        // artificial delay
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const data = await import('@/app/utils/mocks/page-two.json');
        return data;

    } catch (error) {
        console.log('error:', error)
        
    }
}