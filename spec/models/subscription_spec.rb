require "spec_helper"

describe Subscription do 
  describe "relations" do
    it{should belong_to(:user1)}
    it{should belong_to(:user2)}
  end
end