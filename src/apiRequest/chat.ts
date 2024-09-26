import http from "@/lib/http";
import { MessageResType } from "@/schemaValidations/message.schema";



const chatApiRequest = {
    send: (body: string) => http.post<MessageResType>('', body),

}

export default chatApiRequest