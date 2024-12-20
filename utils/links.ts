// ประกาศtype แบบปกติ

// const links: { href: string, label: string }[] = [
//     { href: "/", label: "Home" },
//     { href: "/favorits", label: "Favorits" },
//     { href: "/camp", label: "My camps" }

// ]

// หรือมาประกาศตัวแปรข้างนอก
type LinkType = {
    href: string,
    label: string
}
export const links: LinkType[] = [
    { href: "/", label: "Home" },
    { href: "/favorites", label: "Favorites" },
    { href: "/camps", label: "My camps" }

]

