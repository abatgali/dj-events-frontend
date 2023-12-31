import Link from "next/link"
import Image from "next/image"
import styles from "@/styles/EventItem.module.css"


export default function EventItem({evt}) {
    return (
        <div className={styles.event}>
            <div className={styles.img}>
                <Image alt="Image of the event" src={
                    evt.attributes.image
                    ? evt.attributes.image.data.attributes.formats.thumbnail.url
                    : '/images/event-default.png'
                }
                width={170}
                height={100}
                />
        </div>

            <div className={styles.info}>
                <span>
                    {evt.attributes.date} at {evt.attributes.time}
                </span>
                <h3>{evt.attributes.name}</h3>
            </div>

            <div className={styles.link}>
                <Link href={`/events/${evt.attributes.slug}`} className={styles.btn}>
                    Details
                </Link>

            </div>
        </div>
    )
}