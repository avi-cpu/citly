require "test_helper"

class UrlsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @url = Url.create(:original_url => "http://www.google.com", :short_url => "http://localhost/hdcghw", :slug => "hdcghw")
  end

  test "should get index" do
    get urls_url
    assert_response :success
  end

  test "should create url" do
    assert_difference('Url.count') do
      post urls_url, params: {url: {:original_url => "http://www.google.com2"}}
    end

    assert_response :success
  end


end
