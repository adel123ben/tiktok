import Feed from "@/components/Feed/Feed";
import Hader from "@/components/Header/Header";
import Sidbar from "@/components/Sidbar/Sidbar";


export default function Home() {
  return (
    <>
  <div>
      <Hader  />




      <div className="flex flex-row">
  <div className="basis-1/4">
    <Sidbar />
  </div>
  <div className="basis-1/4 grid mb-3">
    <Feed avatar="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8a4308537c058beba153fe49a0b9eaaa~c5_100x100.jpeg?x-expires=1694782800&x-signature=YQ9AnVC3OfnDvrSLeykPb0Qdha8%3D" nom="natgeo" bio="National Geographic" titre="Not the dinner interruption👀 Learn more about humpbacks disrupting killer whale hunts at the 🔗 in bio." videoUrl="/vid1.mp4"/>
    <Feed avatar="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/083307dae54408ed32285be3dd2419fc.jpeg?x-expires=1694872800&x-signature=nOwVem18LAjIY9%2FJ3aiSlrEAO34%3D" nom="Mega" bio="Pro Mentage" titre="Mega lodo  wow this big !!!!!" videoUrl="/vid2.mp4"/>
    <Feed avatar="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a4e632b408e54b2b18caaf2c0b8c6ebf.jpg?x-expires=1694786400&x-signature=Lst7blWgWZbfepaZvoSYGmHZgek%3D" nom="Fruz" bio="Pro Game" titre="Look at this mentage!!!!!" videoUrl="/vid3.mp4"/>
    <Feed avatar="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e71c06a86b7231283635a9d97d802549~c5_100x100.jpeg?x-expires=1694872800&x-signature=lCe0C%2F8FgUDd1WOWEDxYZIa5YrE%3D" nom="MarkiePhone" bio="Tec Channel" titre="The new iphone 15 wowwo !!!!!" videoUrl="/vid4.mp4"/>
  </div>
</div>
    </div>
    </>
    
  )
}
