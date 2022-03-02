import Carousel, { CasouselItem } from "./carousel";
export default function App() {
    return (
        <div className='App'>
            <Carousel>
                <CasouselItem>1</CasouselItem>
                <CasouselItem>2</CasouselItem>
                <CasouselItem>3</CasouselItem>
                <CasouselItem>4</CasouselItem>
            </Carousel>
        </div>
    );
}
