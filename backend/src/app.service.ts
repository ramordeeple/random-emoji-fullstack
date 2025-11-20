import {Injectable} from '@nestjs/common'

@Injectable()
export class AppService {
    getEmoji() {
        const emojis = this.getEmojis()
        const randomIndex = Math.floor(Math.random() * emojis.length)


        return emojis[randomIndex]
    }

    getEmojis() {
        return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
    }
}
