const LBL_LIKE_NUMBER = "a[data-test='user-nav-link-likes'] span:last-child span"
const BTN_DOWNLOAD_IMG = "(//div//figure//a[@title='Download photo'])[%s]"
 
export const LikePhotoPage = {
    getDownloadLinkRef(number) {
        var linkHref = []
        for(let i = 1; i < number; i++) {
            linkHref.push(BTN_DOWNLOAD_IMG.replace("%s", i))
        }
        return linkHref
    }
}