function createBox({firstName, lastName, emial, avatar}) {
    let box =
    `
    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 mt-4">
        <div class="box rounded text-center d-flex flex-column justify-content-around">
            <div class="p-3">
                <img class="rounded-3 w-50 h-100" src="${avatar}">
            </div>
            <div class="info-box d-flex flex-column justify-content-around">
                <span class="d-block info-name">${firstName}</span>
                <span class="d-block info-family">${lastName}</span>
                <span class="d-block info-email">${emial}</span>
            </div>
        </div>
    </div>
    `;
    $(".boxRow").append(box);
}