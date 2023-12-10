"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const notificationButton = document.getElementById('notificationButton');
    const notificationPopup = document.getElementById('notificationPopup');
    const notificationContent = document.getElementById('notificationContent');
    const notificationCounter = document.getElementById('notificationCounter');
    const feedbackNotification = '<a href="feedback.html">Оцените работу нашего сайта на странице "Обратная связь"</a>';
    const notifications = [];
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
            notificationPopup.style.display = 'block'; // Показываем окно уведомлений
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
    function addFeedbackNotification() {
        notifications.push(feedbackNotification);
        updateNotifications();
        updateCounter();
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
    setInterval(function () {
        if (notifications.length === 0) {
            addFeedbackNotification();
            showNotificationPopup();
        }
        setTimeout(function () {
            const feedbackIndex = notifications.indexOf(feedbackNotification);
            if (feedbackIndex !== -1) {
                notifications.splice(feedbackIndex, 1);
                updateNotifications();
                updateCounter();
            }
            hideNotificationPopup();
        }, 15000);
    }, 20000);
});