import { POST_THRIFT_URL } from './settings/api';
import { getToken } from './utils/storage';
import { checkLength, checkImgUrl } from "./utils/validation";

const addThriftForm = document.getElementById('addThriftForm');
const thriftTitle = document.getElementById('thriftTitle');
const errorThriftTitle = document.getElementById('errorThriftTitle');
const thriftDescription = document.getElementById('thriftDescription');
const errorThriftDescription = document.getElementById('errorThriftDescription');
const thriftImage1 = document.getElementById('thriftImageUrl1');
const thriftImage2 = document.getElementById('thriftImageUrl2');
const thriftImage3 = document.getElementById('thriftImageUrl3');
const errorThriftImage = document.getElementById('errorThriftImageUrl');
const thriftTag1 = document.getElementById('thriftTag1');
const thriftTag2 = document.getElementById('thriftTag2');
const thriftTag3 = document.getElementById('thriftTag3');
const endTime = document.getElementById('endTime');
const errorEndTime = document.getElementById('errorEndTime');
const errorMessageAddThrift = document.getElementById('errorMessageAddThrift');

addThriftForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let validInputAddThrift = false;
  if (checkLength(thriftTitle.value, 4)) {
    thriftTitle.classList.add('text-green-500', 'border-green-500');
    errorThriftTitle.classList.add('hidden');
    validInputAddThrift = true;
  } else {
    thriftTitle.classList.add('text-red-500', 'border-red-500');
    errorThriftTitle.classList.remove('hidden');
  }

  if (checkLength(thriftDescription.value, 7)) {
    thriftDescription.classList.add('text-green-500', 'border-green-500');
    errorThriftDescription.classList.add('hidden');
    validInputAddThrift = true;
  } else {
    thriftDescription.classList.add('text-red-500', 'border-red-500');
    errorThriftDescription.classList.remove('hidden');
  }

  if (checkImgUrl(thriftImage1.value || thriftImage1.value === '')) {
    thriftImage1.classList.add('text-green-500', 'border-green-500');
    errorThriftImage.classList.add('hidden');
    validInputAddThrift = true;
  } else {
    thriftImage1.classList.add('text-red-500', 'border-red-500');
    errorThriftImage.classList.remove('hidden');
  }

  if (endTime.value) {
    endTime.classList.add('text-green-500', 'border-green-500');
    errorEndTime.classList.add('hidden');
    validInputAddThrift = true;
  } else {
    endTime.classList.add('text-red-500', 'border-red-500');
    errorEndTime.classList.remove('hidden');
  }

  if (validInputAddThrift) {
    const tags = [thriftTag1.value, thriftTag2.value, thriftTag3.value];
    const thriftGallery = [thriftImage1.value, thriftImage2.value, thriftImage3.value];

    const postData = {
      "title": thriftTitle.value,
      "description": thriftDescription.value,
      "tags": tags,
      "media": thriftGallery.length > 0 ? thriftGallery : null,
      "endsAt": endTime.value,
    };

    const accessToken = getToken();

    async function postThrift() {
      const response = await fetch(POST_THRIFT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(postData),
      });
      if (response.ok) {
        const postJSON = await response.json();
        errorMessageAddThrift.innerHTML = 'Your thrift is listed!';
      } else {
        const errMessage = await response.json();
        errorMessageAddThrift.innerHTML = `${errMessage}`;
      }
    }
    postThrift().then();
  }
})
