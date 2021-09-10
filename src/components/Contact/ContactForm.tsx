import React, { useRef, useState, useEffect } from "react";

import Notification from "../Notification";

interface DataType {
  email: string;
  name: string;
  message: string;
}

const sendData = async (data: DataType) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
};

const ContactForm = () => {
  const [requestStatus, setRequestStatus] = useState<string | null>(); // 'pending', 'success', 'error'

  const email = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const HandlerFormSubmitting = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dataForm = {
      email: email.current?.value,
      name: name.current?.value,
      message: message.current?.value,
    };

    setRequestStatus("pending");
    try {
      await sendData(dataForm as DataType);
      setRequestStatus("success");
    } catch (err) {
      setRequestStatus("error");
    }
  };

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: "Something went wrong",
    };
  }

  return (
    <form className="p-10 card bg-base-200" onSubmit={HandlerFormSubmitting}>
      <div className="form-control">
        <label htmlFor="email" className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          ref={email}
          required
          type="email"
          name="email"
          placeholder="Email"
          className="input"
        />
      </div>
      <div className="form-control">
        <label htmlFor="username" className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          ref={name}
          required
          type="text"
          name="username"
          placeholder="Name"
          className="input"
        />
      </div>
      <div className="form-control">
        <label htmlFor="message" className="label">
          <span className="label-text">Message</span>
        </label>
        <textarea
          ref={message}
          required
          className="textarea h-24"
          name="message"
          placeholder="Message"
        ></textarea>
      </div>
      <div className="form-control mt-4">
        <button className="btn btn-primary" name="message">
          Send Message
        </button>
      </div>
      {notification && (
        <Notification
          title={notification?.title as string}
          message={notification?.message as string}
          status={notification?.status as string}
        />
      )}
    </form>
  );
};

export default ContactForm;
