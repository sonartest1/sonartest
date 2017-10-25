package com.adobe.eurobet.utils;

public class LinkItem {

    private String linkUrl;
    private String linkLabel;


    public LinkItem(String linkUrl, String linkLabel) {
        setLinkUrl(linkUrl);
        setLinkLabel(linkLabel);
    }

    public void setLinkUrl(String linkUrl) {
        this.linkUrl = linkUrl;
    }

    public void setLinkLabel(String linkLabel) {
        this.linkLabel = linkLabel;
    }

    public String getLinkUrl() {
        return linkUrl;
    }

    public String getLinkLabel() {
        return linkLabel;
    }

}
