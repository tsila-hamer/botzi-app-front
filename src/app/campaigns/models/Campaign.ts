/*export class Campaign
{

    constructor( public campaignName:string, public campaignID:any,public campaignNpo:string,
        public startDate:any, public endDate:any, public city:string,
        public cText?:string) {}

}*/

export interface Campaign {
   campaignName:string,
   campaignID:any,
   campaignNpo:string,
   startDate:any,
   endDate:any,
   city:string,
   cText?:string,
   img_url?:string
}
