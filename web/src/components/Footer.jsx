
export default function Footer () {
    return (
      <section className="bg-dark text-light p-4">
        <div className="container">
          <div className="row gap-3 justify-between">
            <div className="col-3 row">
              <img className="col-12 w-50 m-10" src="/svg/logo-no-background.svg" />
              <div className="col-12 text-start"> Make the world a better place!  </div>
            </div>
            <div className="col-4 row">
            <div className="flex justify-items-center content-center items-center">

              <div className="col-6 flex flex-col gap-3">
                <div className="mb-8 text-center font-bold text-xl"> ABOUT US </div>
                <div className="text-center">a bunch of college students.</div>
              </div>
              <div className="col-6 flex flex-col gap-3">
                <div className="mb-8 text-center font-bold text-xl"> CONTACT US </div>
                <div className="text-center">Contact us with out contacts.</div>
              </div>
            </div>
            </div>
            <div className="col-3 flex justify-items-center content-center items-center">
                <div className="m-auto flex justify-center align-middle gap-3 ">

                    <SocialMediaIcon href="https://www.facebook.com/" src="/svg/facebook-logo.svg" />
                    <SocialMediaIcon href="https://www.github.com/" src="/svg/github-logo.svg" />
                    <SocialMediaIcon href="https://www.linkedin.com/" src="/svg/linkedin-logo.svg" />
                </div>
            </div>
          </div>
        </div>

        <CopyRight />

      </section>
    );
}


function SocialMediaIcon ({src, href}) {
    return (
        <a className="border border-yellow-50 bg-light rounded-full p-1 h-10" href={href}>
            <img src={src} alt=""  className="w-8 h-8"/>
        </a>
    );
}


function CopyRight () {
    return (
        <div className="container mt-9">
          <div className="row justify-center">
            <div className="col-12 text-center">
              <div className="text-xs text-gray-400">
                © 2021 - All Rights Reserved - Terms of Service
              </div>
            </div>
            </div>
        </div>
    )
}   