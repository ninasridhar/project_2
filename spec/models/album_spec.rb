require "spec_helper"

describe Album do 
  describe "relations" do
    it{should belong_to(:user)}
    it{should have_many(:comments)}
    it{should have_and_belong_to_many(:photos)}
  end
end