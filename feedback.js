"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const notificationButton = document.getElementById('notificationButton');
    const notificationPopup = document.getElementById('notificationPopup');
    const notificationContent = document.getElementById('notificationContent');
    const notificationCounter = document.getElementById('notificationCounter');
    const feedbackNotification = "Спасибо за ваш отзыв!";
    const feedbackForm = document.getElementById('feedbackForm');
    const notifications = [];

    function handleFeedbackFormSubmission(event) {
        event.preventDefault();

        if (!feedbackForm.submitted) {
            notifications.push(feedbackNotification);
            updateNotifications();
            updateCounter();
            feedbackForm.submitted = true;
        }

        feedbackForm.reset();
        showNotificationPopup();
    }

    feedbackForm.addEventListener('submit', handleFeedbackFormSubmission);

    function createNotificationElement(notification, index) {
        const notificationItem = document.createElement('div');
        notificationItem.classList.add('notification-item');
        const closeButton = document.createElement('span');
        closeButton.innerHTML = '&times;';
        closeButton.classList.add('close-button');
        closeButton.addEventListener('click', function () {
            notifications.splice(index, 1);
            updateNotifications();
            updateCounter();
        });
        const notificationText = document.createElement('span');
        notificationText.innerHTML = notification;
        notificationItem.appendChild(notificationText);
        notificationItem.appendChild(closeButton);
        return notificationItem;
    }

    function updateNotifications() {
        notificationContent.innerHTML = '';
        if (notifications.length === 0) {
            const noNotificationsText = document.createTextNode("Новых уведомлений нет");
            notificationContent.appendChild(noNotificationsText);
            notificationPopup.style.display = 'block';
        } else {
            notifications.forEach((notification, index) => {
                const notificationItem = createNotificationElement(notification, index);
                notificationContent.appendChild(notificationItem);
            });
        }
    }

    function updateCounter() {
        notificationCounter.textContent = notifications.length;
        if (notifications.length === 0) {
            hideCounter();
        } else {
            showCounter();
        }
    }

    function showCounter() {
        notificationCounter.style.display = 'inline-block';
    }

    function hideCounter() {
        notificationCounter.style.display = 'none';
    }

    function showNotificationPopup() {
        notificationPopup.style.display = 'block';
    }

    function hideNotificationPopup() {
        notificationPopup.style.display = 'none';
    }

    notificationButton.addEventListener('click', function () {
        if (notificationPopup.style.display === 'block') {
            hideNotificationPopup();
        } else {
            showNotificationPopup();
        }
    });
});